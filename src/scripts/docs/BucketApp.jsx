import React    from 'react';
import ReactDOM from 'react-dom';

import { Bucket, BucketBody, BucketHeader, Icon, Table } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const bucketExample = require('raw!./examples/Bucket.example.txt');
const bucketDocs = {
  className: '[Optional] - Include additional class name(s)',
  size: '[Optional] - Bucket size -  [small]',
  type: '[Optional] - Bucket type -  [default | primary]',
};
const bucketScope  = {
  React,
  ReactDOM,
  Bucket,
  BucketBody,
  BucketHeader,
  Icon,
  Table,
};

const bucketHeaderExample = require('raw!./examples/BucketHeader.example.txt');
const bucketHeaderDocs = {
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Icon name',
  iconClassName: '[Optional] - Include additional class name(s) for icon',
  title: '[Optional] - Include tile for header',
};
const bucketHeaderScope  = {
  React,
  ReactDOM,
  BucketHeader,
  Icon,
};

const BucketApp = () =>
  <div>
    <h1 className="site-headline">Buckets</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Buckets</h3>
      <p className="site-text-lead">Buckets are used to contain and separate portions of content. Buckets are most often constructed using <span className="u-text-accent">BucketHeader</span> and <span className="u-text-accent">BucketBody</span> child components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Types</h3>
      <p className="site-copy"><code>type="default | primary"</code></p>
      <div className="site-example-buckets">
        <Bucket>
          <BucketHeader title="Bucket Header" icon="pencil" />
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
        <Bucket type="primary">
          <BucketHeader title="Bucket Header" icon="sms" />
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Sizes</h3>
      <div>
        <p className="site-copy"><code>size="small"</code></p>
        <div className="site-example-buckets">
          <Bucket size="small">
            <BucketHeader title="Bucket Header" icon="pencil" />
            <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
          </Bucket>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Playground</h3>
      <Playground docClass={Bucket} propDescriptionMap={bucketDocs} codeText={bucketExample} scope={bucketScope} noRender={false} />
    </section>

    <section>
      <h3 className="site-subheadline">Bucket Header Playground</h3>
      <Playground docClass={BucketHeader} propDescriptionMap={bucketHeaderDocs} codeText={bucketHeaderExample} scope={bucketHeaderScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<BucketApp />, document.getElementById('js-app'));
