class Team {
    constructor(name, wins=0, loses=0, pf=0, pa=0, ranking=0) {
        this.name=name;
        this.w=wins;
        this.l=loses;
        this.pf=pf;
        this.pa=pa;
        this.ranking = ranking;
    }

    winPercentage() {
		return this.w / (this.w + this.l);
	}

	gamesAhead(that) {
		return (this.w - this.l - that.w + that.l) / 2;
	}

	static playGame(winner, loser, pointsW, pointsL) {
		winner.w++;
		loser.l++;
        winner.pf += pointsW;
        winner.pa += pointsL;
        loser.pf += pointsW;
        loser.pa += pointsL;
	}

    static rank(...teams) {
        teams.sort((a,b) => a.winPercentage() - b.winPercentage());
        for (let i=0; i<teams.length; i++) {
            teams[i].ranking = i+1;
        }
    }
}