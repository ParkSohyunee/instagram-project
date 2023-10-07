import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 실시간으로 입력받은 keyword를 파라미터로 전달 받은 후,
  // value가 변경될 때마다 delay 이후에 debouncedValue 상태값을 변경
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // console.log(`최신 입력 값: ${value}`);

    // delay 전에 value가 변경된다면 이전에 정해놓은 타이머는 취소
    return () => {
      // console.log(`정리할 값: ${value}`);
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
