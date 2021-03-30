package ch.uzh.pokino.demo.web;

import ch.uzh.pokino.demo.accounts.Account;
import ch.uzh.pokino.demo.accounts.AccountManager;
import ch.uzh.pokino.demo.accounts.JdbcAccountManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {

    private final AccountManager accountManager;

    @Autowired
    public AccountController(JdbcAccountManager accountManager) {
        this.accountManager = accountManager;
    }

    @GetMapping("/")
    public String helloWorld() {
        return "Hello World!";
    }

    @GetMapping("/accounts")
    public List<Account> accountList() {
        return accountManager.getAllAccounts();
    }

}
