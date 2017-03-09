let youtubeTile = (props) => (
  <div>
    <div>
      <iframe src={'https://www.youtube.com/embed/' + **var name** }></iframe>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.youtubeTile = youtubeTile;