package ch.uzh.pokino.demo.accounts;

import javax.persistence.*;

@Entity
@Table(name = "T_ACCOUNT")
public class Account {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entityId;

    @Column(name = "NUMBER")
    private String number;

    @Column(name = "NAME")
    private String name;

    /**
     * Create a new account.
     *
     * @param number the account number
     * @param name   the name on the account
     */
    public Account(String number, String name) {
        this.number = number;
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
