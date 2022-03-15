import "./StickyNote.css";

const StickyNote = (props) => {
  return <div class="sticky-note">
      {props.content1}<br/>
      {props.content2}
      </div>;
};

export default StickyNote;
