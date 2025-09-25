// import React, { useEffect,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./GuestPage.css"; // This should include both header and QnA styles

// const posts = [
//   {
//     title: "How to connect to company VPN",
//     content:
//       "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
//     tags: ["VPN", "IT"],
//     dept: "Dept-4",
//     upvotes: 12,
//     downvotes: 0,
//     datetime: "19-9-2025, 10:51:21 pm",
//   },
//   {
//     title: "How to raise leave request",
//     content:
//       "Open HR portal → My Requests → New Leave. Select dates, reason and approver. Attach docs if needed. Manager gets a notification.",
//     tags: ["HR", "Leave"],
//     dept: "Dept-6",
//     updates: 8,
//     downvotes: 0,
//     datetime: "19-9-2025, 10:57:11 pm",
//   },
//   {
//     title: "Setup local SQL Server",
//     content:
//       "Install SQL Server Express, enable TCP/IP, create SQL auth user and update connection string in appsettings.json.",
//     tags: ["SQL", "Server"],
//     dept: "Dept-6",
//     updates: 10,
//     downvotes: 0,
//     datetime: "19-9-2025, 11:11:43 pm",
//   },
// ];

// function GuestPage() {
//   const navigate = useNavigate();
//   const [showPrompt, setShowPrompt] = useState(false);
  
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/feed", { replace: true });
//     }

//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setShowPrompt(true);
//       window.removeEventListener("scroll", handleScroll);
//     }
//   };
  
//  const handleView = (postId) => {
//     alert(`Viewing post ${postId}`);
//   };


//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [navigate]);

//   return (
//     <div className="guest-page">
//       {/* Header Section */}
//       <header className="header-container">
//         <div className="top-nav">
//           <div className="nav-left">
//             <div className="logo-container">
//               <img src="/fnfi.png"></img>
//             </div>
//           </div>
//           <div className="nav-right">
//             <button className="nav-btn" onClick={() => navigate("/signup")}>
//               Sign Up
//             </button>
//             <button className="nav-btn" onClick={() => navigate("/login")}>
//               Login
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Welcome Section */}
//       <section className="guest-header">
//         <h1>Welcome to FNF Knowledge Hub</h1>
//         {/* <p>Please login or sign up to continue.</p> */}
//       </section>

//       {/* QnAHub Section */}
//       <div className="qna-container">
//         {/* <h2 className="qna-header">FNF Knowledge Hub</h2>
//         <div className="qna-helptext">You may view up to 3 posts. Viewed: 1.</div> */}
//         {posts.map((p, idx) => (
//           <div className="qna-post" key={idx}>
//             <div className="qna-title">{p.title}</div>
//             <div className="qna-content">{p.content}</div>
//             <div className="qna-meta">
//               {p.tags.map((tag) => (
//                 <span className="qna-tag" key={tag}>{tag}</span>
//               ))}
//               <span className="qna-dept">{p.dept}</span>
//             </div>
//             <div className="qna-footer">
//               <span className="qna-updates">
//                 Updates: {p.updates} • Downvotes: {p.downvotes} • {p.datetime}
//               </span>
//               <button className="qna-btn">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
      
// {/* Scroll Prompt Modal */}
//       {showPrompt && (
//         <div className="scroll-modal">
//           <p>Please login or sign up to continue exploring!</p>
//           <button onClick={() => navigate("/login")}>Login</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       )}

//     </div>
//   );
// }

// export default GuestPage;



// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./GuestPage.css"; // This should include both header and QnA styles

// // const posts = [
// //   {
// //     title: "How to connect to company VPN",
// //     content:
// //       "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
// //     tags: ["VPN", "IT"],
// //     dept: "Dept-4",
// //     updates: 12,
// //     downvotes: 0,
// //     datetime: "19-9-2025, 10:51:21 pm",
// //   },
// //   {
// //     title: "How to raise leave request",
// //     content:
// //       "Open HR portal → My Requests → New Leave. Select dates, reason and approver. Attach docs if needed. Manager gets a notification.",
// //     tags: ["HR", "Leave"],
// //     dept: "Dept-6",
// //     updates: 8,
// //     downvotes: 0,
// //     datetime: "19-9-2025, 10:57:11 pm",
// //   },
// //   {
// //     title: "Setup local SQL Server",
// //     content:
// //       "Install SQL Server Express, enable TCP/IP, create SQL auth user and update connection string in appsettings.json.",
// //     tags: ["SQL", "Server"],
// //     dept: "Dept-6",
// //     updates: 10,
// //     downvotes: 0,
// //     datetime: "19-9-2025, 11:11:43 pm",
// //   },
// // ];

// // function GuestPage() {
// //   const navigate = useNavigate();
// //   const [showPrompt, setShowPrompt] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       navigate("/feed", { replace: true });
// //     }

// //     const handleScroll = () => {
// //       if (window.scrollY > 300) {
// //         setShowPrompt(true);
// //         window.removeEventListener("scroll", handleScroll);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [navigate]);

// //   return (
// //     <div className="guest-page">
// //       {/* Header Section */}
// //       <header className="header-container">
// //         <div className="top-nav">
// //           <div className="nav-left">
// //             <div className="logo-container">
// //               /fnfi.png
// //             </div>
// //           </div>
// //           <div className="nav-right">
// //             <button className="nav-btn" onClick={() => navigate("/signup")}>
// //               Sign Up
// //             </button>
// //             <button className="nav-btn" onClick={() => navigate("/login")}>
// //               Login
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Welcome Section */}
// //       <section className="guest-header">
// //         <h1>Welcome to FNF Knowledge Hub</h1>
// //       </section>

// //       {/* QnAHub Section */}
// //       <div className="qna-container">
// //         {posts.map((p, idx) => (
// //           <div className="qna-post" key={idx}>
// //             <div className="qna-title">{p.title}</div>
// //             <div className="qna-content">{p.content}</div>
// //             <div className="qna-meta">
// //               {p.tags.map((tag) => (
// //                 <span className="qna-tag" key={tag}>{tag}</span>
// //               ))}
// //               <span className="qna-dept">{p.dept}</span>
// //             </div>
// //             <div className="qna-footer">
// //               <span className="qna-updates">
// //                 Updates: {p.updates} • Downvotes: {p.downvotes} • {p.datetime}
// //               </span>
// //               <button className="qna-btn">Read More</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Scroll Prompt Modal */}
// //       {showPrompt && (
// //         <div className="scroll-modal">
// //           <p>Please login or sign up to continue exploring!</p>
// //           <button onClick={() => navigate("/login")}>Login</button>
// //           <button onClick={() => navigate("/signup")}>Sign Up</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default GuestPage;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./GuestPage.css";

// const posts = [
//   {
//     PostId: 1,
//     Title: "How to connect to company VPN",
//     Body: "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
//     Tags: [{ TagId: 1, TagName: "VPN" }, { TagId: 2, TagName: "IT" }],
//     DeptId: "Dept-4",
//     UpvoteCount: 12,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T22:51:21",
//   },
//   {
//     PostId: 2,
//     Title: "How to raise leave request",
//     Body: "Open HR portal → My Requests → New Leave. Select dates, reason and approver. Attach docs if needed. Manager gets a notification.",
//     Tags: [{ TagId: 3, TagName: "HR" }, { TagId: 4, TagName: "Leave" }],
//     DeptId: "Dept-6",
//     UpvoteCount: 8,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T22:57:11",
//   },
//   {
//     PostId: 3,
//     Title: "Setup local SQL Server",
//     Body: "Install SQL Server Express, enable TCP/IP, create SQL auth user and update connection string in appsettings.json.",
//     Tags: [{ TagId: 5, TagName: "SQL" }, { TagId: 6, TagName: "Server" }],
//     DeptId: "Dept-6",
//     UpvoteCount: 10,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T23:11:43",
//   },
// ];

// export default function GuestPage() {
//   const navigate = useNavigate();
//   const [showPrompt, setShowPrompt] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/feed", { replace: true });
//     }

//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowPrompt(true);
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [navigate]);

//   const handleView = (postId) => {
//     alert(`Viewing post ${postId}`);
//   };

//   return (
//     <div className="guest-page">
//       {/* Header */}
//       <header className="header-container">
//         <div className="top-nav">
//           <div className="nav-left">
//             <div className="logo-container">
//               <img src="/fnfi.png"></img>
//             </div>
//           </div>
//           <div className="nav-right">
//             <button className="nav-btn" onClick={() => navigate("/signup")}>
//               Sign Up
//             </button>
//             <button className="nav-btn" onClick={() => navigate("/login")}>
//               Login
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Welcome */}
//       <section className="guest-header">
//         <h1>Welcome to FNF Knowledge Hub</h1>
//       </section>

//       {/* Posts */}
//       <div className="qna-container">
//         {posts.map((post) => {
//           const excerpt =
//             post.Body && post.Body.length > 160
//               ? post.Body.slice(0, 157) + "..."
//               : post.Body;

//           return (
//             <div
//               key={post.PostId}
//               style={{
//                 border: "1px solid #e6edf3",
//                 borderRadius: 8,
//                 padding: 16,
//                 background: "#fff",
//                 boxShadow: "0 1px 4px rgba(2,6,23,0.04)",
//                 marginBottom: 24,
//               }}
//             >
//               <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ margin: "0 0 8px" }}>{post.Title}</h3>
//                   <div style={{ color: "#334155" }}>{excerpt}</div>

//                   <div style={{ marginTop: 8 }}>
//                     {Array.isArray(post.Tags) &&
//                       post.Tags.map((tag) => (
//                         <span
//                           key={tag.TagId}
//                           style={{
//                             display: "inline-block",
//                             padding: "4px 8px",
//                             marginRight: 6,
//                             marginBottom: 6,
//                             borderRadius: 999,
//                             border: "1px solid #e2e8f0",
//                             fontSize: 12,
//                             color: "#0f172a",
//                           }}
//                         >
//                           {tag.TagName}
//                         </span>
//                       ))}
//                   </div>
//                 </div>

//                 <div style={{ textAlign: "right" }}>
//                   <div style={{ fontSize: 12, color: "#6b7280" }}>
//                     DeptId: {post.DeptId}
//                   </div>
//                   <div style={{ marginTop: 8 }}>
//                     <button
//                       onClick={() => handleView(post.PostId)}
//                       style={{
//                         padding: "8px 12px",
//                         borderRadius: 6,
//                         border: "none",
//                         background: "#2563eb",
//                         color: "#fff",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: 10, fontSize: 12, color: "#6b7280" }}>
//                 Upvotes: {post.UpvoteCount ?? 0} • Downvotes: {post.DownvoteCount ?? 0} • CreatedAt:{" "}
//                 {post.CreatedAt ? new Date(post.CreatedAt).toLocaleString() : ""}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Scroll Prompt */}
//       {showPrompt && (
//         <div className="scroll-modal">
//           <p>Please login or sign up to continue exploring!</p>
//           <button onClick={() => navigate("/login")}>Login</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./GuestPage.css";

// const posts = [
//   {
//     PostId: 1,
//     Title: "How to connect to company VPN",
//     Body: "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
//     Tags: [{ TagId: 1, TagName: "VPN" }, { TagId: 2, TagName: "IT" }],
//     DeptId: "Dept-4",
//     UpvoteCount: 12,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T22:51:21",
//   },
//   {
//     PostId: 2,
//     Title: "How to raise leave request",
//     Body: "Open HR portal → My Requests → New Leave. Select dates, reason and approver. Attach docs if needed. Manager gets a notification.",
//     Tags: [{ TagId: 3, TagName: "HR" }, { TagId: 4, TagName: "Leave" }],
//     DeptId: "Dept-6",
//     UpvoteCount: 8,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T22:57:11",
//   },
//   {
//     PostId: 3,
//     Title: "Setup local SQL Server",
//     Body: "Install SQL Server Express, enable TCP/IP, create SQL auth user and update connection string in appsettings.json.",
//     Tags: [{ TagId: 5, TagName: "SQL" }, { TagId: 6, TagName: "Server" }],
//     DeptId: "Dept-6",
//     UpvoteCount: 10,
//     DownvoteCount: 0,
//     CreatedAt: "2025-09-19T23:11:43",
//   },
// ];

// export default function GuestPage() {
//   const navigate = useNavigate();
//   const [showPrompt, setShowPrompt] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/feed", { replace: true });
//     }

//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowPrompt(true);
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [navigate]);

//   const handleView = (postId) => {
//   alert("Please login or sign up to view full content.");
//   navigate("/login");
// };


//   return (
//     <div className="guest-page">
//       <header className="header-container">
//         <div className="top-nav">
//           <div className="nav-left">
//             <div className="logo-container">
//               <img src="/fnfi.png"></img>
//             </div>
//           </div>
//           <div className="nav-right">
//             <button className="nav-btn" onClick={() => navigate("/signup")}>
//               Sign Up
//             </button>
//             <button className="nav-btn" onClick={() => navigate("/login")}>
//               Login
//             </button>
//           </div>
//         </div>
//       </header>

//       <section className="guest-header">
//         <h1>Welcome to FNF Knowledge Hub</h1>
//       </section>

//       <div className="qna-container">
//         {posts.map((post) => {
//           const excerpt =
//             post.Body && post.Body.length > 160
//               ? post.Body.slice(0, 157) + "..."
//               : post.Body;

//           return (
//             <div
//               key={post.PostId}
//               style={{
//                 border: "1px solid #e6edf3",
//                 borderRadius: 8,
//                 padding: 16,
//                 background: "#fff",
//                 boxShadow: "0 1px 4px rgba(2,6,23,0.04)",
//                 marginBottom: 24,
//               }}
//             >
//               <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ margin: "0 0 8px" }}>{post.Title}</h3>
//                   <div style={{ color: "#334155" }}>{excerpt}</div>

//                   <div style={{ marginTop: 8 }}>
//                     {Array.isArray(post.Tags) &&
//                       post.Tags.map((tag) => (
//                         <span
//                           key={tag.TagId}
//                           style={{
//                             display: "inline-block",
//                             padding: "4px 8px",
//                             marginRight: 6,
//                             marginBottom: 6,
//                             borderRadius: 999,
//                             border: "1px solid #e2e8f0",
//                             fontSize: 12,
//                             color: "#0f172a",
//                           }}
//                         >
//                           {tag.TagName}
//                         </span>
//                       ))}
//                   </div>
//                 </div>

//                 <div style={{ textAlign: "right" }}>
//                   <div style={{ fontSize: 12, color: "#6b7280" }}>
//                     DeptId: {post.DeptId}
//                   </div>
//                   <div style={{ marginTop: 8 }}>
//                     <button
//                       onClick={() => handleView(post.PostId)}
//                       style={{
//                         padding: "8px 12px",
//                         borderRadius: 6,
//                         border: "none",
//                         background: "#2563eb",
//                         color: "#fff",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Read More
//                     </button>

//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: 10, fontSize: 12, color: "#6b7280" }}>
//                 Upvotes: {post.UpvoteCount ?? 0} • Downvotes: {post.DownvoteCount ?? 0} • CreatedAt:{" "}
//                 {post.CreatedAt ? new Date(post.CreatedAt).toLocaleString() : ""}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {showPrompt && (
//         <div className="scroll-modal">
//           <p>Please login or sign up to continue exploring!</p>
//           <button onClick={() => navigate("/login")}>Login</button>
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GuestPage.css";

const posts = [
  {
    PostId: 1,
    Title: "How to connect to company VPN",
    Body: "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
    Tags: [{ TagId: 1, TagName: "VPN" }, { TagId: 2, TagName: "IT" }],
    DeptId: "Dept-4",
    UpvoteCount: 12,
    DownvoteCount: 0,
    CreatedAt: "2025-09-19T22:51:21",
  },
  {
    PostId: 2,
    Title: "How to raise leave request",
    Body: "Open HR portal → My Requests → New Leave. Select dates, reason and approver. Attach docs if needed. Manager gets a notification.",
    Tags: [{ TagId: 3, TagName: "HR" }, { TagId: 4, TagName: "Leave" }],
    DeptId: "Dept-6",
    UpvoteCount: 8,
    DownvoteCount: 0,
    CreatedAt: "2025-09-19T22:57:11",
  },
  {
    PostId: 3,
    Title: "Setup local SQL Server",
    Body: "Install SQL Server Express, enable TCP/IP, create SQL auth user and update connection string in appsettings.json.",
    Tags: [{ TagId: 5, TagName: "SQL" }, { TagId: 6, TagName: "Server" }],
    DeptId: "Dept-6",
    UpvoteCount: 10,
    DownvoteCount: 0,
    CreatedAt: "2025-09-19T23:11:43",
  },
  {
    PostId: 4,
    Title: "How to connect to company VPN",
    Body: "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
    Tags: [{ TagId: 1, TagName: "VPN" }, { TagId: 2, TagName: "IT" }],
    DeptId: "Dept-4",
    UpvoteCount: 12,
    DownvoteCount: 0,
    CreatedAt: "2025-09-19T22:51:21",
  },
  {
  PostId: 5,
    Title: "How to connect to company VPN",
    Body: "Step-by-step: open VPN client, add server address, use corporate credentials. If MFA enabled, approve on your device. Troubleshoot: check firewall, DNS, and certificates.",
    Tags: [{ TagId: 1, TagName: "VPN" }, { TagId: 2, TagName: "IT" }],
    DeptId: "Dept-4",
    UpvoteCount: 12,
    DownvoteCount: 0,
    CreatedAt: "2025-09-19T22:51:21",
  },
];

export default function GuestPage() {
  const navigate = useNavigate();
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/feed", { replace: true });
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollPrompt(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  const handleView = () => {
    setShowModal(true);
  };

  return (
    <div className="guest-page">
      <header className="header-container">
        <div className="top-nav">
          <div className="nav-left">
            <div className="logo-container">
              <img src="/fnfi.png"></img>
            </div>
          </div>
          <div className="nav-right">
            <button className="nav-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
            <button className="nav-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </header>

      <section className="guest-header">
        <h1>Welcome to FNF Knowledge Hub</h1>
      </section>

      <div className="qna-container">
        {posts.map((post) => {
          const excerpt =
            post.Body && post.Body.length > 160
              ? post.Body.slice(0, 157) + "..."
              : post.Body;

          return (
            <div
              key={post.PostId}
              style={{
                border: "1px solid #e6edf3",
                borderRadius: 8,
                padding: 16,
                background: "#fff",
                boxShadow: "0 1px 4px rgba(2,6,23,0.04)",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px" }}>{post.Title}</h3>
                  <div style={{ color: "#334155" }}>{excerpt}</div>

                  <div style={{ marginTop: 8 }}>
                    {Array.isArray(post.Tags) &&
                      post.Tags.map((tag) => (
                        <span
                          key={tag.TagId}
                          style={{
                            display: "inline-block",
                            padding: "4px 8px",
                            marginRight: 6,
                            marginBottom: 6,
                            borderRadius: 999,
                            border: "1px solid #e2e8f0",
                            fontSize: 12,
                            color: "#0f172a",
                          }}
                        >
                          {tag.TagName}
                        </span>
                      ))}
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    DeptId: {post.DeptId}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button
                      onClick={handleView}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 6,
                        border: "none",
                        background: "#2563eb",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 10, fontSize: 12, color: "#6b7280" }}>
                Upvotes: {post.UpvoteCount ?? 0} • Downvotes: {post.DownvoteCount ?? 0} • CreatedAt:{" "}
                {post.CreatedAt ? new Date(post.CreatedAt).toLocaleString() : ""}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Prompt */}
      {showScrollPrompt && (
        <div className="scroll-modal">
          <p>Please login or sign up to continue exploring!</p>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      )}

      {/* Read More Modal */}
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h3>Login Required</h3>
            <p>Please login or sign up to view full content.</p>
            <div className="modal-actions">
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Sign Up</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
