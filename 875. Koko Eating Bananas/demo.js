/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var canEatAllBananas = function(piles,H,mid){
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile/mid);
    }
    return h <= H
}
var minEatingSpeed = function(piles, H) {
    let lo = 1;
    let hi = Math.max(...piles);
    while(lo <= hi){
        let mid = lo + ((hi-lo) >> 1);
        if(canEatAllBananas(piles,H,mid)){
            hi = mid - 1;
        }else{
            lo = mid +1;
        }
    }
    return lo;
};