import "./FormPublishing.css";

const FormPublishing = () => {
  return (
    <form className="publishing-form">
      <label>
        First name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Studio name:
        <input type="text" name="studioName" />
      </label>
      <label>
        Portfolio link:
        <input type="url" name="portfolioLink" />
      </label>
      <label>
        Interest:
        <textarea
          name="interest"
          placeholder="Please indicate if you want to publish an existing app, build new apps or explore other opportunities"
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPublishing;
