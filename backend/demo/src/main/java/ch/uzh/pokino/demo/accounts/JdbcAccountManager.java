package ch.uzh.pokino.demo.accounts;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import java.util.List;

@Component
@EnableAutoConfiguration
public class JdbcAccountManager implements AccountManager {

    private JdbcTemplate jdbcTemplate;

    public JdbcAccountManager(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    @Override
    public List<Account> getAllAccounts() {
        return jdbcTemplate.queryForList("select * from T_ACCOUNT", Account.class);
    }
}
