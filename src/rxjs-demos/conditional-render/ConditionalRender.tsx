import React from 'react';
import { from, of } from 'rxjs';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';
import { useObservableState } from 'observable-hooks';
import { Button } from 'antd';
const fetchData = () => {
  const failed = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    if (failed) {
      setTimeout(() => {
        reject('failed');
      }, 200);
    } else {
      setTimeout(() => {
        resolve('success');
      }, 300);
    }
  });
};

export const ConditionalRender = () => {
  const SuccessUI = () => <div>Success UI</div>;
  const FailedUI = () => <div>Failed UI</div>;
  const LoadingUI = () => <div>Loading UI</div>;
  const DefaultUI = () => <div>Default UI</div>;

  const [status, onFetchData] = useObservableState(
    (input$) =>
      input$.pipe(
        switchMap((event) =>
          from(fetchData()).pipe(
            map((value) => <SuccessUI />),
            catchError((e) => of(<FailedUI />)),
            startWith(() => <LoadingUI />)
          )
        )
      ),
    () => <DefaultUI />
  );

  return (
    <div>
      <h4> conditional-render </h4>
      <Button onClick={() => onFetchData(<DefaultUI />)}>refresh</Button>
      <div>{status}</div>
    </div>
  );
};

export default ConditionalRender;
