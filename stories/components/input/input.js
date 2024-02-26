import "./input.css";

export function createInput({
  primary = false,
  size = "medium",
  backgroundColor = "white",
  label,
  onChange,
}) {
  const inp = `
  <div class='story-input'>
  <div>
    <label></label>
    <input 
    type='text' 
    class='storybook-input'
    placeholder="eg.Johnrouter" 
    >
  </div>
</div>`;
  return inp;
}
