import React from 'react';
import { useObservableState, pluckFirst, useObservable } from 'observable-hooks';
import { switchMap, debounceTime, map, pluck, withLatestFrom } from 'rxjs/operators';
import { Button, Input } from 'antd';

const checkText = (text: string, uuid: string) =>
  fetch(`https://api/${text}?uuid=${uuid}`)
    .then((response) => response.ok)
    .catch(() => false);

export const DebounceTextVerification = ({ uuid }: { uuid: string }) => {
  const uuid$ = useObservable(pluckFirst, [uuid]);

  const [disabled, onChange] = useObservableState<boolean, React.ChangeEvent<HTMLInputElement>>(
    (event$) =>
      event$.pipe(
        pluck('currentTarget', 'value'),
        debounceTime(400),
        withLatestFrom(uuid$),
        switchMap(([text, uuid]) => checkText(text, uuid))
      ),
    false
  );

  return (
    <div>
      <Input onChange={onChange}></Input>
      <Button disabled={disabled}>submit</Button>
    </div>
  );
};

export default DebounceTextVerification;
