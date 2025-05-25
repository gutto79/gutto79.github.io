import { useEffect } from "react";

/**
 * モーダル表示時に背景のスクロールを無効化し、
 * スクロールバーが消えることによるUIの歪みを防ぐフック
 *
 */
export const useScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (!isLocked) {
      // スクロールロックを解除
      document.body.style.overflow = "";
      document.body.style.marginRight = "";
      // ヘッダーのマージンも元に戻す
      const header = document.querySelector("header");
      if (header) {
        header.style.marginRight = "";
      }
      return;
    }

    // 現在のスクロールバーの幅を計算
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // 現在のmarginRightを保存（既存のmarginがある場合を考慮）
    const originalMarginRight = window.getComputedStyle(
      document.body
    ).marginRight;
    const originalMarginValue = parseInt(originalMarginRight, 10) || 0;

    // ヘッダーの現在のmarginRightを保存
    const header = document.querySelector("header");
    const headerOriginalMarginRight = header
      ? window.getComputedStyle(header).marginRight
      : "0px";
    const headerOriginalMarginValue =
      parseInt(headerOriginalMarginRight, 10) || 0;

    // スクロールを無効化し、スクロールバーの幅分をmarginで補償
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${
      originalMarginValue + scrollbarWidth
    }px`;

    // ヘッダーにも同様のマージンを適用
    if (header) {
      header.style.marginRight = `${
        headerOriginalMarginValue + scrollbarWidth
      }px`;
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = "";
      document.body.style.marginRight = originalMarginRight;
      if (header) {
        header.style.marginRight = headerOriginalMarginRight;
      }
    };
  }, [isLocked]);
};
