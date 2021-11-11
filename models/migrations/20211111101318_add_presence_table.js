exports.up = (knex) => {
    return knex.schema.createTable("presence", (t) => {
        t.increments()
            .index();

        t.string("name", 100).notNullable();
        
        t.date("date")
        .notNullable()
        .defaultTo(knex.fn.now());

        t.string("presence", 100)
        .notNullable();
    
        t.string("message", 100);
    
        t.timestamp("update_time")
        .notNullable()
        .defaultTo(knex.fn.now());
    });
};
        
exports.down = (knex) => {
    return knex.schema.dropTable("presence");
};
