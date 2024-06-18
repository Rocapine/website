import "./FormRH.css";

const FormRH = () => {
  return (
    <form className="rh-form">
      <label>
        First name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        LinkedIn link:
        <input type="url" name="linkedinLink" />
      </label>
      <label>
        Comment (optional):
        <textarea name="comment"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRH;
