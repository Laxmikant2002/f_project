import React from 'react';

const FeedbackForm = () => {
  return (
    <form>
      <div>
        <label>Why did you vote?</label>
        <select name="reason">
          <option value="education">Education</option>
          <option value="roads">Roads</option>
          <option value="electricity">Electricity</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>General Comments:</label>
        <textarea name="comments"></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FeedbackForm;