import axios from "axios";

const API = axios.create({
  baseURL: "https://hr-analytics-backend-1.onrender.com/analytics/kpis/",
});

export const fetchJobRoleAttrition = () => API.get("attrition/job-role/");
export const fetchSalaryAttrition = () => API.get("attrition/salary-range/");
export const fetchDepartmentAttrition = () => API.get("attrition/department/");
export const fetchEducationAttrition = () => API.get("attrition/education/");
export const fetchYearsAttrition = () => API.get("attrition/years/");
export const fetchGenderAttrition = () => API.get("attrition/gender/");

export const fetchKPIs = (department, salaryBand, ageGroup) =>
  API.get("kpis/", {
    params: { department, salaryBand, ageGroup },
  });

export const fetchAgeAttrition = (department, salaryBand, ageGroup) =>
  API.get("attrition/age/", {
    params: { department, salaryBand, ageGroup },
  });
