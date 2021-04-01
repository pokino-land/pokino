package ch.uzh.pokino.demo.accounts;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.AbstractCollection;
import java.util.List;

@Component
public class JdbcAccountManager implements AccountManager {

    private final JdbcTemplate jdbcTemplate;

    public JdbcAccountManager(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private static class AccountRowMapper implements RowMapper<Account> {
        public Account mapRow(ResultSet rs, int rowNum) throws SQLException {
            return mapAccount(rs);
        }

        private Account mapAccount(ResultSet rs) throws SQLException {
            // get the row column data
            String name = rs.getString("NAME");
            String number = rs.getString("NUMBER");

            // map to the object
            return new Account(number, name);
        }
    }

    @Override
    public List<Account> getAllAccounts() {
        AccountRowMapper rowMapper = new AccountRowMapper();
        var ret = jdbcTemplate.query("select * from T_ACCOUNT", rowMapper);
        return ret;
    }

    @Override
    public Long getNumberOfAccounts() {
        return jdbcTemplate.queryForObject("select count(*) from T_ACCOUNT", Long.class);
    }
}
