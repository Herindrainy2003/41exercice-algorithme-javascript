function smaller(nums) {
    return nums.map((v,i)=>nums.slice(i).filter(k=>k<v).length)
}