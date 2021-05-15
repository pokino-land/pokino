package ch.pokino.pokemon.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Pokemon {

    @Id
    @GeneratedValue
    private Long id;

    private int pokeDexIdx;
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

    public Pokemon () {}

    public Pokemon(int pokeDexIdx, String name, String type1, String type2, int sumPoints, int healthPoints, int attackPoints,
                   int defensePoints, int specialAttackPoints, int specialDefensePoints, int attackSpeed,
                   int generation, boolean isLegendary) {
        this.pokeDexIdx = pokeDexIdx;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.sumPoints = sumPoints;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
        this.specialAttackPoints = specialAttackPoints;
        this.specialDefensePoints = specialDefensePoints;
        this.attackSpeed = attackSpeed;
        this.generation = generation;
        this.isLegendary = isLegendary;
    }

    public static Pokemon fromCsvLine(List<String> csvLine) {
        return new Pokemon(
                Integer.parseInt(csvLine.get(0)),
                csvLine.get(1),
                csvLine.get(2),
                csvLine.get(3),
                Integer.parseInt(csvLine.get(4)),
                Integer.parseInt(csvLine.get(5)),
                Integer.parseInt(csvLine.get(6)),
                Integer.parseInt(csvLine.get(7)),
                Integer.parseInt(csvLine.get(8)),
                Integer.parseInt(csvLine.get(9)),
                Integer.parseInt(csvLine.get(10)),
                Integer.parseInt(csvLine.get(11)),
                Boolean.parseBoolean(csvLine.get(12)));
    }


    public int getPokeDexIdx() {
        return pokeDexIdx;
    }

    public void setPokeDexIdx(int pokeDexIdx) {
        this.pokeDexIdx = pokeDexIdx;
    }

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
