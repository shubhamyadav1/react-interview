// Pure components: Optimize the rendering performance of components by reducing un-necessary re-renders.
// In class components React.PureComponent
// In functional components wrap inside React.memo

import React from "react";
const MemoizedComponent = React.memo(() => {
  console.log("re-renders");
  return <div>Memoized </div>;
});
export default MemoizedComponent;
