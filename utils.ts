/**
 * 判断两个字符串数组是否相等
 */
export const isSameStringArr = (arr1:string[], arr2:string[]) => {
    let hash = JSON.parse(JSON.stringify(arr2))
    if (arr1.length === arr2.length) {
      for(let i = 0; i < arr1.length;i++) {
        const index = hash.indexOf(arr1[i]);
        if (index > -1) {
          hash.splice(index, 1);
        } else {
          return false;
        }
      }
      return true;
    }
    return false;
}