import { useRouter } from "next/router";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

function Navbar() {
  const [session, loading] = useSession();

  //console.log({ session, loading });

  const router = useRouter();
  const loginHandler = (e) => {
    e.preventDefault();
    signIn("github");
    router.push("/dashboard");
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    signOut("github");
    // router.push("/api/auth/signout");
    router.push("/");
  };

  const dashboardHandler = () => {
    router.push("/dashboard");
  };

  const urlHandler = () => {
    // alert("previous url is: " + window?.history?.previous?.href);
    const parameters = window.location.href;
    console.log(`parameters`, parameters);
  };

  return (
    <div
      style={{
        textAlign: "right",
        padding: "10px 20%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span> {session ? `${session.user.name}` : "Navbar"}</span>
      <span>
        {session && <button onClick={dashboardHandler}>dashboard</button>}
      </span>
      <span>
        <button
          onClick={() => {
            router.push("/comments");
          }}
        >
          Comments
        </button>
      </span>
      {!loading && !session && (
        <button onClick={(e) => loginHandler(e)}>Login</button>
      )}

      {session && <button onClick={(e) => logoutHandler(e)}>Log Out</button>}
      <button onClick={urlHandler}> URL</button>
    </div>
  );
}

export default Navbar;
