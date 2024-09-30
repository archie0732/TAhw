import { checkresult } from "./gnuCheck";
import { dlfromDrive } from "./dlFromdrive";
import { showSoureCode } from "./showSourceCode";

export const guncheck = async (url: string, input: string, output: string) => {
  const dlURL = url.split("/")[5];
  await dlfromDrive(dlURL);
  const result = await checkresult(input, output);
  if (result === "ok") {
    console.log("ok");
  } else if (result !== "compiler error" && result !== "runtime error") {
    console.log("wrong answer");
    console.log("except answer:");
    console.log(output);
    console.log("======");
    console.log("receive output:");
    console.log(JSON.stringify(result));
    //console.log(showSoureCode());
  }
};

guncheck(
  "https://drive.google.com/file/d/12cn0zvfY-kAyFcxAxzKKQVvtteg9YJxt/view?usp=drive_link",
  "3 2 1 0",
  "7\n5\n4\n"
);
