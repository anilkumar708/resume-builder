import { Typography } from "@mui/material";
import { useState } from "react";
import {
  StyledTextField,
  Container,
} from "../../StyledComponents/StyledEducation";
import { Title, SubTitle, Add } from "../../StyledComponents/StyledComponent";

const EducationAdd = () => {
  const EducationData = [
    { type: "SSC", ssc: "", date: "", percentage: "", place: "" },
    { type: "PUC", puc: "", date: "", percentage: "", place: "" },
    { type: "Graduate", graduate: "", date: "", percentage: "", place: "" },
    { type: "Post G", postG: "", date: "", percentage: "", place: "" },
  ];
  const [education, setEducation] = useState<any>(EducationData);

  const handleChange = (index: any, name: any, value: any) => {
    setEducation((prevData: any) => {
      const newData = [...prevData];
      newData[index][name] = value; // Update the specific field
      return newData;
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("education details", education);
    setEducation(EducationData);
  };
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Title>Add Education</Title>
          {education.map((edu: any, index: any) => (
            <div key={index}>
              <SubTitle>{edu.type}</SubTitle>
              {edu.type === "SSC" && (
                <>
                  <StyledTextField
                    type="text"
                    name="ssc"
                    variant="outlined"
                    label="SSC"
                    value={edu.ssc}
                    onChange={(e) => handleChange(index, "ssc", e.target.value)}
                  />
                  <StyledTextField
                    type="date"
                    name="date"
                    variant="outlined"
                    label="Passed Out "
                    InputLabelProps={{
                      shrink: true, // This makes the label always visible
                    }}
                    value={edu.date}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="number"
                    name="percentage"
                    variant="outlined"
                    label="Percentage"
                    value={edu.percentage}
                    onChange={(e) =>
                      handleChange(index, "percentage", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="text"
                    name="place"
                    variant="outlined"
                    label="Place"
                    value={edu.place}
                    onChange={(e) =>
                      handleChange(index, "place", e.target.value)
                    }
                  />
                </>
              )}
              {edu.type === "PUC" && (
                <>
                  <StyledTextField
                    type="text"
                    name="puc"
                    variant="outlined"
                    label="PUC"
                    value={edu.puc}
                    onChange={(e) => handleChange(index, "puc", e.target.value)}
                  />
                  <StyledTextField
                    type="date"
                    name="date"
                    variant="outlined"
                    label="Passed Out "
                    InputLabelProps={{
                      shrink: true, // This makes the label always visible
                    }}
                    value={edu.date}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="number"
                    name="percentage"
                    variant="outlined"
                    label="Percentage"
                    value={edu.percentage}
                    onChange={(e) =>
                      handleChange(index, "percentage", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="text"
                    name="place"
                    variant="outlined"
                    label="Place"
                    value={edu.place}
                    onChange={(e) =>
                      handleChange(index, "place", e.target.value)
                    }
                  />
                </>
              )}
              {edu.type === "Graduate" && (
                <>
                  <StyledTextField
                    type="text"
                    name="graduate"
                    variant="outlined"
                    label="Graduate"
                    value={edu.graduate}
                    onChange={(e) =>
                      handleChange(index, "graduate", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="date"
                    name="date"
                    variant="outlined"
                    label="Passed Out "
                    InputLabelProps={{
                      shrink: true, // This makes the label always visible
                    }}
                    value={edu.date}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="number"
                    name="percentage"
                    variant="outlined"
                    label="Percentage"
                    value={edu.percentage}
                    onChange={(e) =>
                      handleChange(index, "percentage", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="text"
                    name="place"
                    variant="outlined"
                    label="Place"
                    value={edu.place}
                    onChange={(e) =>
                      handleChange(index, "place", e.target.value)
                    }
                  />
                </>
              )}
              {edu.type === "Post G" && (
                <>
                  <StyledTextField
                    type="text"
                    name="postG"
                    variant="outlined"
                    label="PostGraduate"
                    value={edu.postG}
                    onChange={(e) =>
                      handleChange(index, "postG", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="date"
                    name="date"
                    variant="outlined"
                    label="Passed Out "
                    InputLabelProps={{
                      shrink: true, // This makes the label always visible
                    }}
                    value={edu.date}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="number"
                    name="percentage"
                    variant="outlined"
                    label="Percentage"
                    value={edu.percentage}
                    onChange={(e) =>
                      handleChange(index, "percentage", e.target.value)
                    }
                  />
                  <StyledTextField
                    type="text"
                    name="place"
                    variant="outlined"
                    label="Place"
                    value={edu.place}
                    onChange={(e) =>
                      handleChange(index, "place", e.target.value)
                    }
                  />
                </>
              )}
            </div>
          ))}
          <Add>Submit</Add>
        </form>
      </Container>
    </>
  );
};

export default EducationAdd;
