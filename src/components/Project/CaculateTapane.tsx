import React from "react";
import { Box, Button, InputAdornment, InputBase } from "@mui/material";
import * as styles from "./caculateTapaneStyle";
export interface ICaculateTabpane {}
const CaculateTabpane: React.FC<ICaculateTabpane> = () => {
  return (
    <Box css={styles.container}>
      <Box css={styles.caculateBox}>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>购入价格</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>固定利率贷款</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>固定利率融资成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>买入成交成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>硬钱贷款</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>硬钱融资成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>改造投入</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>私人贷款</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>私人贷款融资成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>预期改造后售价</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>卖出成交成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>房产持有成本</Box>
          <InputBase
            css={styles.inputText}
            startAdornment={
              <InputAdornment css={styles.inputPre} position="start">
                $
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment css={styles.inutpos} position="end">
                ❖
              </InputAdornment>
            }
          />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>项目周期</Box>
          <InputBase css={styles.inputText} />
        </Box>
      </Box>
      <Box css={styles.bottomCaculateBox}>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>资金投入</Box>
          <InputBase css={styles.inputText} />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>利润</Box>
          <InputBase css={styles.inputText} />
        </Box>
        <Box css={styles.inputGridItem}>
          <Box css={styles.inputLabel}>投资回报比</Box>
          <InputBase css={styles.inputText} />
        </Box>
      </Box>
      <Button css={styles.saveBtn} variant={"contained"}>
        保存计算结果
      </Button>
    </Box>
  );
};

export default CaculateTabpane;
