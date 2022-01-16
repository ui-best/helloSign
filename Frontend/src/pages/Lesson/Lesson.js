import React, { useState, useEffect } from "react";
import styles from "./Lesson.module.css";
import l1 from "../Assets/l1.png";
import l2 from "../Assets/l2.png";
import l3 from "../Assets/l3.png";
import bk from "../Assets/lessonBK.png";
import a from "../Assets/A.png";
import b from "../Assets/B.png";
import c from "../Assets/C.png";
import a1 from "../Assets/a1.png";
import b1 from "../Assets/b1.png";
import c1 from "../Assets/c1.png";
import arrow from "../Assets/arrow-right.png";
import { Link, useNavigate } from "react-router-dom";
import hello from "../Assets/hello.PNG";
import yes from "../Assets/yes.PNG";
import no from "../Assets/no.PNG";
import helloword from "../Assets/helloword.PNG";
import ar from "../Assets/ar.png"; //qr code
import yesword from "../Assets/yesword.PNG";
import noword from "../Assets/noword.PNG";
export default function Lesson() {
  let navigate = useNavigate();
  let lessonsArr = [
    [
      {
        ques: "The Sign of the Letter 'A'",
        qImg: l1,
        sImg: a,
        aImg: a1,
        qrcode: ar,
      },
      {
        ques: "The Sign of the Letter 'A'",
        qImg: l1,
        sImg: a,
        aImg: a1,
        qrcode: ar,
      },
      {
        ques: "The Sign of the Letter 'B'",
        qImg: l2,
        sImg: b,
        aImg: b1,
        qrcode: ar,
      },
      {
        ques: "The Sign of the Letter 'C'",
        qImg: l3,
        sImg: c,
        aImg: c1,
        qrcode: ar,
      },
    ],
    [
      {
        ques: "The Sign for the word 'Hello'",
        qImg: l1,
        sImg: helloword,
        aImg: hello,
        qrcode: ar,
      },
      {
        ques: "The Sign for the word 'Hello'",
        qImg: l1,
        sImg: helloword,
        aImg: hello,
        qrcode: ar,
      },
      {
        ques: "The Sign for the word 'No'",
        qImg: l2,
        sImg: noword,
        aImg: no,
        qrcode: ar,
      },
      {
        ques: "The Sign for the word 'Yes'",
        qImg: l3,
        sImg: yesword,
        aImg: yes,
        qrcode: ar,
      },
    ],
    [
      {
        ques: "What is the Sign for 'A'",
        qImg: l1,
        sImg: a,
        aImg: a1,
        qrcode: ar,
      },
      {
        ques: "What is the Sign for 'A'",
        qImg: l1,
        sImg: a,
        aImg: a1,
        qrcode: ar,
      },
      {
        ques: "What is the Sign for 'B'",
        qImg: l2,
        sImg: b,
        aImg: b1,
        qrcode: ar,
      },
      {
        ques: "What is the Sign for 'C'",
        qImg: l3,
        sImg: c,
        aImg: c1,
        qrcode: ar,
      },
    ],
  ];
  let lessonIdx = Number(localStorage.getItem("lessonIdx")) || 0;
  let lessons = lessonsArr[lessonIdx];
  const [idx, setIdx] = useState(1);

  useEffect(() => {
    let index = localStorage.getItem("lesson");
    if (idx) {
      let tempIdx = Number(index);
      tempIdx = tempIdx > 3 ? 1 : tempIdx;
      setIdx(1);
    }
  }, []);

  const setIdxAtLocal = (idx) => {
    const tempIdx = idx == 4 ? 1 : idx;
    setIdx(tempIdx);
    localStorage.setItem("lesson", JSON.stringify(tempIdx));
  };

  return (
    <>
      <div className={styles.progressWrapper}>
        <div className={styles.crossBtn}>
          <Link to="/dashboard">
            <i className="fas fa-times"></i>
          </Link>
        </div>
        <div className={styles.bars}>
          <div
            className={[styles.bar, styles.blue].join(" ")}
            onClick={() => setIdxAtLocal(1)}
          ></div>
          <div
            className={[styles.bar, idx > 1 ? styles.blue : styles.grey].join(
              " "
            )}
            onClick={() => setIdxAtLocal(2)}
          ></div>
          <div
            className={[styles.bar, idx > 2 ? styles.blue : styles.grey].join(
              " "
            )}
            onClick={() => setIdxAtLocal(3)}
          ></div>
        </div>
      </div>
      <div className={styles.lessonWrapper}>
        <div className={styles.heading}>
          <img src={lessons[idx].qImg} />
          <h1>{lessons[idx].ques}</h1>
        </div>
        <div className={styles.lesson}>
          <div className={styles.box1}>
            <div className={styles.topImg}>
            <img src={lessons[idx].sImg} />
            <div className={styles.txt}>Hover To Scan</div>
            </div>
            <div className={styles.belowImg}>
            <img src={lessons[idx].qrcode} />
            </div>
          </div>
          <div className={styles.equals}>
            <i className="fas fa-equals"></i>
          </div>
          <div className={styles.box2}>
            <img src={lessons[idx].aImg} />
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <div className={styles.skipBtn} onClick={() => setIdxAtLocal(idx + 1)}>
          Skip
        </div>
        {idx < 3 ? (
          <div
            className={styles.nextBtn}
            onClick={() => setIdxAtLocal(idx + 1)}
          >
            Next <img src={arrow} />
          </div>
        ) : (
          <div
            className={styles.nextBtn}
            onClick={() => {
              setIdxAtLocal(idx + 1);
              localStorage.setItem("done" + lessonIdx, "1");
              navigate("/dashboard");
            }}
          >
            Finish <img src={arrow} />
          </div>
        )}
      </div>
    </>
  );
}
