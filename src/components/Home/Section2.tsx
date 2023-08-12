import React from "react";
import { Box } from "@mui/material";
import * as styles from "./sectionStyle2";
import Image from "next/image";
export interface ISection2 {}
const Section2: React.FC<ISection2> = () => {
  return <Box css={styles.container}>
    <Box css={styles.title}>我们提供什么服务</Box>
    <Box css={styles.gridContainer}>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon1} src={'/icon1.png'} alt={''} />
        <Box css={styles.itemTitle}>远程项目管理空间</Box>
        <Box css={styles.itemText}>专门针对远程地产投资人的项目管理平台。我们使用工作空间的模式，你可以足不出户和你的远程地产开发团队进行项目开发合作。</Box>
      </Box>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon2} src={'/icon2.png'} alt={''} />
        <Box css={styles.itemTitle}>AI大数据分析</Box>
        <Box css={styles.itemText}>您专属的AI + 大数据分析收购团队，确保您总是买到好的投资标地。保证客户每周都能收到十个以上的预审后推荐。</Box>
      </Box>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon3} src={'/icon3.png'} alt={''} />
        <Box css={styles.itemTitle}>精准房产筛选</Box>
        <Box css={styles.itemText}>精挑二十个北美地产投资市场。每一个市场都是: 高投资回报，正向人口趋势，高租金房价比，低犯罪率，政府保护房东法案， 等一切有利于投资的因素。</Box>
      </Box>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon4} src={'/icon4.png'} alt={''} />
        <Box css={styles.itemTitle}>高效任务管理</Box>
        <Box css={styles.itemText}>横跨全美的地产投资服务，一站式远程帮您解决: 房产管理，建筑设计报规，房屋买卖中介，建筑施工，合同法务，商业税务以及其他地产投资相关繁琐的流程手续。</Box>
      </Box>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon5} src={'/icon5.png'} alt={''} />
        <Box css={styles.itemTitle}>专属投资课程</Box>
        <Box css={styles.itemText}>预制北美地产投资教程(保证学会地产投资的必要知识)， 及专属的地产投资导师，手把手教你在Parcel REI上完成前三个Deal</Box>
      </Box>
      <Box css={styles.gridItem}>
        <Image width={135} height={101} css={styles.icon6} src={'/icon6.png'} alt={''} />
        <Box css={styles.itemTitle}>高端投资社群</Box>
        <Box css={styles.itemText}>全美华人地产投资人交流社群，帮助您找到投资合作伙伴，您的第一个投资人，交流投资敬仰，进阶在美房产投资的段位。</Box>
      </Box>
    </Box>
  </Box>;
};
export default Section2;
