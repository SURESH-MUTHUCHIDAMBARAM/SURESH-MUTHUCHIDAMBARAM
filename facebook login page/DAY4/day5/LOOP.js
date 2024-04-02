const resumeData = {
    name: "Suresh",
    address: "11-a nataraja theatre road, sattur",
    email: "suresh@gmail.com",
    mobile: "8248737569",
    education: {
      SSLC: "82%",
      HSC: "48%",
      UG: {
        degree: "B.COM",
        percentage: "61%",
      },
      PG: {
        degree: "M.COM",
        percentage: "68%",
      },
    },
    skills: [
      "Accounting",
      "Microsoft Excel",
      "Microsoft Office",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  };
  
  // Using a for loop
  console.log("Using a for loop:");
  for (let key in resumeData) {
    console.log(key + ": " + resumeData[key]);
  }
  
  //   Using a for...in loop
  console.log("\nUsing a for...in loop:");
  for (let key in resumeData) {
    console.log(key + ": " + resumeData[key]);
  }
  
  // Using a for...of loop (for skills array)
  console.log("\nUsing a for...of loop:");
  for (let skill of resumeData.skills) {
    console.log(skill);
  }
  // Using forEach method
  console.log("\nUsing forEach method:");
  resumeData.skills.forEach((skill) => {
    console.log(skill);
  });
  