import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const buttonExample = require('raw!./examples/Button.example.txt');
const buttonDocs = {
  active: '[Optional] - Button is active',
  blankWindow: '[Optional] - Open URL in blank browser window',
  block: '[Optional] - Button is block level',
  className: '[Optional] - Include additional class name(s)',
  onClick: '[Optional] - Include click function for Button',
  disabled: '[Optional] - Button is disabled',
  iconOnly: '[Optional] - Button has an icon but no text',
  route: '[Optional] - React-router route to use for item',
  size: '[Optional] - Button size -  [small | large]',
  type: '[Optional] - Button type -  [default | primary | secondary | outline-default | outline-primary | outline-reversed | link]',
  url: '[Optional] - URL for item',
};
const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Icon,
};

const ButtonApp = () =>
  <div>
    <h1 className="site-headline">Buttons</h1>
    <section className="site-section">
      <h3 className="site-subheadline">Button Types</h3>
      <p className="site-copy"><code>type="default | primary | secondary | outline-default | outline-primary | link | danger"</code></p>
      <div className="site-example-buttons u-m-b-md">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="outline-default">Outline Default</Button>
        <Button type="outline-primary">Outline Primary</Button>
        <Button type="link">Link</Button>
        <Button type="danger">Danger</Button>
      </div>
      <p className="site-copy"><code>type="outline-reversed"</code></p>
      <div className="site-example-buttons u-p-a u-bg-primary">
        <Button type="outline-reversed">Outline Reversed</Button>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Sizes</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Large Button</h5>
        <p className="site-copy"><code>size="large"</code></p>
        <div className="site-example-buttons">
          <Button size="large">Large</Button>
          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>
          <Button size="large" iconOnly><Icon icon="cog" /></Button>
        </div>
      </div>
      <div>
        <h5 className="site-miniheadline">Small Button</h5>
        <p className="site-copy"><code>size="small"</code></p>
        <div className="site-example-buttons">
          <Button size="small">Small</Button>
          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>
          <Button size="small" iconOnly><Icon icon="cog" /></Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Modifiers</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Block Buttons</h5>
        <p className="site-copy">Include <code>block</code> property to create a block level button.</p>
        <Button block>Block Button</Button>
      </div>
      <div>
        <h5 className="site-miniheadline">Icon-Only Buttons</h5>
        <p className="site-copy">Include <code>iconOnly</code> property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.</p>
        <div className="site-example-buttons">
          <Button iconOnly><Icon icon="sms" /></Button>
          <Button type="primary" iconOnly><Icon icon="email" /></Button>
          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>
          <Button type="outline-default" iconOnly><Icon icon="clock" /></Button>
          <Button type="outline-primary" iconOnly><Icon icon="pencil" /></Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button States</h3>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button>Default</Button>
          <Button active>Default Active</Button>
          <Button disabled>Default Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="primary">Primary</Button>
          <Button type="primary" active>Primary Active</Button>
          <Button type="primary" disabled>Primary Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="secondary">Secondary</Button>
          <Button type="secondary" active>Secondary Active</Button>
          <Button type="secondary" disabled>Secondary Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="outline-default">Outline Default</Button>
          <Button type="outline-default" active>Outline Default Active</Button>
          <Button type="outline-default" disabled>Outline Default Disabled</Button>
        </div>
      </div>
      <div className="u-m-b">
        <div className="site-example-buttons">
          <Button type="outline-primary">Outline Primary</Button>
          <Button type="outline-primary" active>Outline Primary Active</Button>
          <Button type="outline-primary" disabled>Outline Primary Disabled</Button>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Badges</h3>
      <h5 className="site-miniheadline">Badges Inside of Buttons</h5>
      <p>Include a span with <code>btn__badge</code> class.</p>
      <div className="site-example-buttons u-m-b-md">
        <Button>Default &nbsp;<span className="btn__badge">12</span></Button>
        <Button type="primary">Primary &nbsp;<span className="btn__badge">12</span></Button>
        <Button type="secondary">Secondary &nbsp;<span className="btn__badge">2</span></Button>
        <Button type="outline-default">Outline Default &nbsp;<span className="btn__badge">12</span></Button>
        <Button type="outline-primary">Outline Primary &nbsp;<span className="btn__badge">12</span></Button>
        <Button type="link">Link &nbsp;<span className="btn__badge">12</span></Button>
        <Button type="danger">Danger &nbsp;<span className="btn__badge">12</span></Button>
      </div>
      <div className="site-example-buttons u-p-a u-bg-primary">
        <Button type="outline-reversed">Outline Reversed &nbsp;<span className="btn__badge">12</span></Button>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Button Ellipsis</h3>
      <h5 className="site-miniheadline">Long Text Inside of Buttons</h5>
      <p>Wrap long button text in <code>u-text-overflow</code> utility class in order to allow ellipsis.</p>
      <div className="u-m-b">
        <Button className="u-m-b-sm"><span className="u-text-overflow">Button With Really Long Name</span></Button>
        <br />
        <Button><Icon icon="lock" />&nbsp;<span className="u-text-overflow">Button With Really Long Name and Icon</span></Button>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Button} propDescriptionMap={buttonDocs} codeText={buttonExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<ButtonApp />, document.getElementById('js-app'));
