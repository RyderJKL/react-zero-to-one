import React from 'react';
import { ajax } from 'rxjs/ajax';
import { pluckFirst, useObservable, useObservableState, useSubscription } from 'observable-hooks';
import {
  switchMap,
  catchError,
  map,
  filter,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import { of } from 'rxjs';

/**
 * 内敛，聚合
 * 将来自上游的 props 变更，以及当前的数据获取逻辑内敛在一起，
 * 而不是分散在一起
 * @param userId
 */
export const useGetRepositories = (userId?: string) => {
  const [repositories, getRepositories] = useObservableState<
    { response?: Array<{ name: string }> },
    string | undefined
  >((input$) =>
    input$.pipe(
      map((v) => v?.trim()),
      filter((v) => !!v),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((params) =>
        ajax(`https://api.github.com/users/${params}/repos`).pipe(
          catchError((e) => of({ response: [] }))
        )
      )
    )
  );

  // // watch props userId, why not use useEffect?
  const userId$ = useObservable(pluckFirst, [userId]);
  useSubscription(userId$, (value) => {
    getRepositories(value);
  });

  // normal to observable
  const repositories$ = useObservable(pluckFirst, [repositories]);

  // 返回数组会丢失类型 => [repositories, repositories$, getRepositories]
  return { repositories, repositories$, getRepositories };
};
