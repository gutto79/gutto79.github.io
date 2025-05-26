import { useEffect } from "react";

/**
 * モーダル表示時に背景のスクロールを無効化し、
 * スクロールバーが消えることによるUIの歪みを防ぐフック
 * モバイルデバイスではスクロールバーがないため、マージン調整は行わない
 */
export const useScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    // モバイルデバイスの場合はスクロールバーの幅を0とする
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const scrollbarWidth = isMobile
      ? 0
      : window.innerWidth - document.documentElement.clientWidth;

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

    if (isLocked) {
      // スクロールを無効化
      document.body.style.overflow = "hidden";

      // スクロールバーの幅が0でない場合のみマージン調整を行う
      if (scrollbarWidth > 0) {
        document.body.style.marginRight = `${
          originalMarginValue + scrollbarWidth
        }px`;

        // ヘッダーにも同様のマージンを適用
        if (header) {
          header.style.marginRight = `${
            headerOriginalMarginValue + scrollbarWidth
          }px`;
        }
      }
    } else {
      // スクロールロックを解除
      document.body.style.overflow = "";
      document.body.style.marginRight = originalMarginRight;
      if (header) {
        header.style.marginRight = headerOriginalMarginRight;
      }
    }

    // クリーンアップ関数
    return () => {
      // コンポーネントのアンマウント時や依存配列の値が変更された時に確実に元の状態に戻す
      document.body.style.overflow = "";
      document.body.style.marginRight = originalMarginRight;
      if (header) {
        header.style.marginRight = headerOriginalMarginRight;
      }
    };
  }, [isLocked]);
};
