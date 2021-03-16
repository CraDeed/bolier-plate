import React from "react";
import axios from "axios";

function LandingPage({ history }) {
    const onClickHandler = () => {
        axios
            .get("http://localhost:5000/api/users/logout", "", {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    history.push("/login");
                } else {
                    alert("로그아웃 하는데 실패 했습니다");
                }
            });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    );
}

export default LandingPage;
