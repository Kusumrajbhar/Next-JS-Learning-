import React, { useState, useEffect } from "react";
import { getSession, session, signIn } from "next-auth/client";
import Link from "next/link";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      console.log(`session`, session);
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage(); //protected
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ textAlign: "center", padding: "10%" }}>
      <h1> Welcome to Dashboard</h1>

      <Link href="/">
        <a style={{ color: "red", fontSize: "26px" }}>Back to home</a>
      </Link>
    </div>
  );
}

export default Dashboard;
