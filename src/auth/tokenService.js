//토큰 검증
import jwtDecode from "jwt-decode";

//현재 사용자 정보 가져오기
export function getCurrrentUser() {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    return undefined;
  }
  try {
    const decodedToken = jwtDecode(jwt);
    return decodedToken;
  } catch (error) {
    return undefined;
  }
}

//로컬 스토리지에 저장된 토큰이 유효한지 판별
export function isValidJwt() {
  const decodedToken = getCurrrentUser();

  if (decodedToken === undefined) {
    return false;
  }

  if (decodedToken.exp < Date.now() / 1000) {
    return false;
  }

  return true;
}
