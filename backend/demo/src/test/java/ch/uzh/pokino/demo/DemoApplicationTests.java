package ch.uzh.pokino.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class DemoApplicationTests {

	public static final String QUERY = "SELECT count(*) FROM T_ACCOUNT";

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Test
	void testNumberOfAccounts() {
		long count = jdbcTemplate.queryForObject(QUERY, Long.class);

		assertThat(count).isEqualTo(21L);
	}

}
