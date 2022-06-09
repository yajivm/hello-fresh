import { generatePath, useNavigate } from "react-router-dom";

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(":url?:queryString", {
      url,
      queryString: params
    });
    navigate(path);
  };
};

export {
  useNavigateParams
}