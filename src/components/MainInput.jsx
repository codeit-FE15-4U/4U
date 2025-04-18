import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

const MainInput = ({ onInputChange, onSubjectCreated }) => {
  const [name, setName] = useState("");

  const apiUrl = "https://openmind-api.vercel.app/15-4/subjects/";

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);
    onInputChange(value);
  };

  const createSubject = useCallback(async () => {
    if (!name.trim()) return null;
    try {
      const response = await axios.post(apiUrl, { name });
      return response.data.id;
    } catch (err) {
      console.error(err);
      return null;
    }
  }, [name]);

  useEffect(() => {
    onSubjectCreated(createSubject);
  }, [createSubject, onSubjectCreated]);

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleInputChange}
        className={`border-grayscale-40 bg-grayscale-10 font-weight-regular rounded-lg border bg-[url('/src/assets/icons/person.svg')] bg-[position:16px_13px] bg-no-repeat py-13 pl-40`}
      />
    </div>
  );
};

export default MainInput;
