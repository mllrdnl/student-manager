const BASE_URL = "http://localhost:3000";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/api/students`);
  const json = await response.json();

  return json;
};

export const getStudent = async (studentId) => {
  const response = await fetch(`${BASE_URL}/api/students/${studentId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

//posting a new student
export async function addStudent(formData) {
  try {
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/students`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

// update a new student
export async function updateStudent(studentId, formData) {
  const Options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(
    `${BASE_URL}/api/students/${studentId}`,
    Options
  );
  const json = await response.json();

  return json;
}

// Delete a new student
export async function deleteStudent(studentId) {
  const Options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${BASE_URL}/api/students/${studentId}`,
    Options
  );
  const json = await response.json();
  return json;
}
