import React from 'react';
import './pages.css';
import {marked} from 'marked';

const Preview = ({ markdown }) => {
  marked.setOptions({
    breaks: true,
  });

  const createMarkup = (markdown) => {
    const html = window.marked.parse(markdown);
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup(markdown)} id='preview'/>;
};

export default function PreviewPage({ value }) {
  return (
    <div className='previor' >
      <div className='prev-title'><h3>Preview Section</h3></div>
      <Preview markdown={value} />
    </div>
  );
}
