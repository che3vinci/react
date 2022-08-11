'use strict';

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
describe('useNavigate', () => {
  it('useStater', () => {
    function Home() {
      const [s1, setS1] = React.useState(1);
      const [s2, setS2] = React.useState(2);
      function handleClick() {
        setS1(s1 + 1);
        setS2(s2 + 2);
      }

      return (
        <div>
          <h1>s1={s1}</h1>
          <h1>s2={s2}</h1>
          <button onClick={handleClick}>click me</button>
        </div>
      );
    }

    let renderer;
    TestRenderer.act(() => {
      renderer = TestRenderer.create(<Home />);
    });

    const button = renderer.root.findByType('button');

    TestRenderer.act(() => {
      button.props.onClick();
    });

    console.log(renderer.toJSON());
  });
});
