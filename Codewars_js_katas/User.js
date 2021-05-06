class User {

    constructor(rankIndex = 0, rankProgress = 0) {
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8]
        this.totalRanks = [...ranks.map(i => -i).reverse(), ...ranks]
        this.currentUserRankIndex = rankIndex
        this.rankProgress = rankProgress
    }

    get rank() {
        return this.totalRanks[this.currentUserRankIndex]
    }

    get progress() {
        return this.rankProgress
    }

    incProgress(activityRank) {
        console.log(`Current user rank: ${this.rank}`);
        console.log(`Current user rank progress: ${this.rankProgress}`);
        console.log(`Activity rank: ${activityRank}\n`);
        if (this.totalRanks.includes(activityRank)) {
            if (activityRank === this.rank) {
                this._incrementRankProgress(3)
            } else if (this.totalRanks.indexOf(activityRank) + 1 == this.currentUserRankIndex) {
                this._incrementRankProgress(1)
            } else if (this.totalRanks.indexOf(activityRank) + 2 <= this.currentUserRankIndex) {
                ;
            } else {
                this._incrementRankProgress(10 * Math.pow(this.currentUserRankIndex - this.totalRanks.indexOf(activityRank), 2))
            }
        } else {
            throw "Invalid activity rank"
        }
        console.log(`Updated user rank: ${this.rank}`);
        console.log(`Updated user rank progress: ${this.rankProgress}`);
        console.log(`Activity rank: ${activityRank}`);
    }

    _incrementRankProgress(points) {
        if (this.currentUserRankIndex == this.totalRanks.length - 1) {
            return;
        }

        let progression = this.rankProgress + points
        
        if (progression >= 100) {
            while (progression >= 100) {
                if (this.currentUserRankIndex !== this.totalRanks.length - 1) {
                    this.currentUserRankIndex++;
                } else {
                    this.rankProgress = 0
                    break;
                }
                progression -= 100
            }
            if (this.currentUserRankIndex != this.totalRanks.length - 1) {
                this.rankProgress = progression
            } else {
                this.rankProgress = 0
            }
        } else {
            this.rankProgress += points
        }

    }
}

var user = new User()
// console.log(user.rank); // => -8
// console.log(user.progress); // => 0
 user.incProgress(1)
// console.log(user.progress); // => 10
// user.incProgress(-5) // will add 90 progress
// console.log(user.progress); // => 0 // progress is now zero
// console.log(user.rank) // => -7 // rank was upgraded to -7