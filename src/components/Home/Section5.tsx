import React from "react";
import { Box, Rating, SvgIcon } from "@mui/material";
import * as styles from "./sectionStyle5";
export interface ISection5 {}
function StarIcon(props: any) {
  return (
    <SvgIcon viewBox="0 0 18 18" {...props}>
      <path
        d="M8.79544 13.1645L13.1593 15.7983L12.0013 10.8342L15.8568 7.49423L10.7797 7.05642L8.79544 2.38184L6.81121 7.05642L1.73413 7.49423L5.58254 10.8342L4.43155 15.7983L8.79544 13.1645Z"
        fill="#E3C814"
      />
    </SvgIcon>
  );
}
function DotIcon(props: any) {
  return (
    <SvgIcon viewBox="0 0 70 23" {...props}>
      <rect y="6.875" width="10" height="10" rx="2" fill="#1252AE" fillOpacity="0.4" />
      <rect
        x="35"
        y="1.58211"
        width="14"
        height="14"
        rx="1.5"
        transform="rotate(45 35 1.58211)"
        stroke="black"
      />
      <rect
        x="35"
        y="4.875"
        width="9"
        height="9"
        rx="2"
        transform="rotate(45 35 4.875)"
        fill="black"
      />
      <rect x="60" y="6.875" width="10" height="10" rx="2" fill="#1252AE" fillOpacity="0.4" />
    </SvgIcon>
  );
}
const Section5: React.FC<ISection5> = () => {
  return (
    <Box css={styles.container}>
      <Box css={styles.title}>客户对我们的评价</Box>
      <Box css={styles.gridContainer}>
        <Box css={styles.gridItem}>
          <Box css={styles.itemText}>
            更有趣的是房子的墙壁，它能随着季节的变化而变化。春天，墙壁上是鲜嫩的小草，蝴蝶在草上翩翩起舞，可开心啦；夏天，墙壁上就会变出大树，小朋友们穿着短袖短裤在草地上打羽毛球跑步踢足球……
          </Box>
          <Box css={styles.cardFooter}>
            <Box css={styles.footerLeft}>
              <Box css={styles.nameText}>Christopher J. Larson</Box>
              <Box css={styles.jobText}>艺术家</Box>
            </Box>
            <Rating
              icon={<StarIcon css={styles.star} />}
              css={styles.rate}
              name="read-only"
              value={5}
              readOnly
            />
          </Box>
        </Box>
        <Box css={styles.gridItem}>
          <Box css={styles.itemText}>
            房间是粉色调的，眼前摆放一张巨大的床，华丽的装饰，让人感觉自己身处童话中的王国似的，床的另一头，是一个精致的化妆台，化妆台上摆放着各式各样的化妆品，在旁的落地窗，射出耀眼的阳光
          </Box>
          <Box css={styles.cardFooter}>
            <Box css={styles.footerLeft}>
              <Box css={styles.nameText}>Derrick P. Boudreaux</Box>
              <Box css={styles.jobText}>房产投资人</Box>
            </Box>
            <Rating
              icon={<StarIcon css={styles.star} />}
              css={styles.rate}
              name="read-only"
              value={5}
              readOnly
            />
          </Box>
        </Box>
        <Box css={styles.gridItem}>
          <Box css={styles.itemText}>
            几间低矮的瓦房，被几棵果树和大榆树环围着。木板钉成的院门用红漆刷了刷，这就大致构成了一个地地道道的农家小院。当我想起那小院时，不由得从心底升起一股怀旧的感觉。
          </Box>
          <Box css={styles.cardFooter}>
            <Box css={styles.footerLeft}>
              <Box css={styles.nameText}>Stanley S. Nesbitt</Box>
              <Box css={styles.jobText}>公司创始人</Box>
            </Box>
            <Rating
              icon={<StarIcon css={styles.star} />}
              css={styles.rate}
              name="read-only"
              value={5}
              readOnly
            />
          </Box>
        </Box>
      </Box>
      <DotIcon css={styles.dotIcon} />
    </Box>
  );
};
export default Section5;
