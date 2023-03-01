const BASE_URL = "http://localhost:3000";

export const getStudent = async () => {
  const response = await fetch(`${BASE_URL}/api/students`);
  const json = await response.json();

  return json;
};
