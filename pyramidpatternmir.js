
revpat = (num) => {
    for (let i = 1; i <= num; i++) {
      let line = "";
      for (let j = 1; j < i; j++) {
        line += " ";
      }
      for (let k = i; k <= num; k++) {
        line += k + " ";
      }
      console.log("\x1b[35m%s\x1b[0m", line);
    }
    for (let i = num; i >0; i--) {
      let line = "";
      for (let j = i-1; j > 0; j--) {
        line += " ";
      }
      for (let k = num; k >=i; k--) {
        line += k + " ";
      }
      console.log("\x1b[32m%s\x1b[0m", line);
    }
  };
  revpat(6);