create_sql = "
  CREATE TABLE notes
  (id integer PRIMARY KEY, text string, is_complete string)"
DB[:conn].execute(create_sql)

insert_sql = "
  INSERT INTO notes (text, is_complete)
  VALUES('buy milk', 'incomplete'), ('feed cat', 'incomplete')"
DB[:conn].execute(insert_sql)

create_sql = <<-SQL
  CREATE TABLE notes
  (id integer PRIMARY KEY, text string, is_complete string)
SQL
DB[:conn].execute(create_sql)

insert_sql1 = <<-SQL
  INSERT INTO notes (text, is_complete)
  VALUES('buy milk', 'incomplete'), ('feed cat', 'incomplete')
SQL

insert_sql2 = <<~SQL
  INSERT INTO notes (text, is_complete)
  VALUES('buy milk', 'incomplete'), ('feed cat', 'incomplete')
SQL
DB[:conn].execute(insert_sql)

foo = <<-LITERALLY_WHATEVER_YOU_WANT_AS_LONG_AS_YOU_WRITE_THE_SAME_INDICATOR_AT_THE_END
  aosfdhbjkns;awohfeiuglsdfnsfjadwohiesugfnbjkclf
  adsfiohlknsaweohsidgfnsjdaweohirsfgurjnfkdsjwaehoirubekfgjnd
  awersfdgiohlknesrawjrsohgirdfnkswejoihrugfjknbgdjieshkjdf
  awesfgdfijojewrsogdifhn
LITERALLY_WHATEVER_YOU_WANT_AS_LONG_AS_YOU_WRITE_THE_SAME_INDICATOR_AT_THE_END

text = <<-YOUR_TOKEN
  ldjksfshgjknfdsjahoisdgjkndjslad
  afsdkjkfsadwljfehskgdjnsajwlhfjkdg
  adsfhjnfslahkfugdnsjelakbdjkk
YOUR_TOKEN

js = <<-JAVASCRIPT
  let x = 99;
  for (let i = 0; i < 99; i++) {
    console.log(i)
  }
JAVASCRIPT

html = <<-HTML
  <h1>hi</h1>
  <a href="google.com">Yahoo!</a>
HTML