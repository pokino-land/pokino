package ch.uzh.pokino.demo.pokemon;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pokemon {

    @Id
    private String id;
    private String name;
    private String type1;
    private String type2;
    private int sumPoints;
    private int healthPoints;
    private int attackPoints;
    private int defensePoints;
    private int specialAttackPoints;
    private int specialDefensePoints;
    private int attackSpeed;
    private int generation;
    private boolean isLegendary;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType1() {
        return type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    public int getSumPoints() {
        return sumPoints;
    }

    public void setSumPoints(int sumPoints) {
        this.sumPoints = sumPoints;
    }

    public int getHealthPoints() {
        return healthPoints;
    }

    public void setHealthPoints(int healthPoints) {
        this.healthPoints = healthPoints;
    }

    public int getAttackPoints() {
        return attackPoints;
    }

    public void setAttackPoints(int attackPoints) {
        this.attackPoints = attackPoints;
    }

    public int getDefensePoints() {
        return defensePoints;
    }

    public void setDefensePoints(int defensePoints) {
        this.defensePoints = defensePoints;
    }

    public int getSpecialAttackPoints() {
        return specialAttackPoints;
    }

    public void setSpecialAttackPoints(int specialAttackPoints) {
        this.specialAttackPoints = specialAttackPoints;
    }

    public int getSpecialDefensePoints() {
        return specialDefensePoints;
    }

    public void setSpecialDefensePoints(int specialDefensePoints) {
        this.specialDefensePoints = specialDefensePoints;
    }

    public int getAttackSpeed() {
        return attackSpeed;
    }

    public void setAttackSpeed(int attackSpeed) {
        this.attackSpeed = attackSpeed;
    }

    public int getGeneration() {
        return generation;
    }

    public void setGeneration(int generation) {
        this.generation = generation;
    }

    public boolean isLegendary() {
        return isLegendary;
    }

    public void setLegendary(boolean legendary) {
        isLegendary = legendary;
    }

}
