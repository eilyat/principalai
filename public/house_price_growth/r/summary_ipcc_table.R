library(tidyverse)
library(kable)
library(kableExtra)

pe <- function(...) {
  cols <-
    c(`blue`  = rgb(55, 126, 184, maxColorValue=255),
      `green` = rgb(0, 176, 0, maxColorValue=255),
      `orange` = rgb(255, 127, 0, maxColorValue=255),
      `lgreen` = rgb(127, 201, 127, maxColorValue=255)
    )
  
  .x <- c(...)
  
  if (is.null(.x))
    return (cols)
  if(is.numeric(.x))
    return(as.vector(cols[.x]))
  if(is.character(cols))
    return(as.vector(cols[.x]))  
}

df <- read_csv("ipcc_table.csv")

s_df <- df[1:4,]

d_df <- df[5:11,]
names(d_df) <- d_df[1,] %>%  as.character()
d_df <- d_df[2:7,]

fcts_supply_tbl <- 
  s_df %>% 
  kbl() %>%
  kable_styling(bootstrap_options = c("striped", "hover")) %>% 
  row_spec(row = 0, bold = TRUE) %>% 
  column_spec(column = 2, 
              color = case_when(s_df$Agreement == "High"   ~ pe("blue"),
                                s_df$Agreement == "Medium" ~ pe("green"),
                                s_df$Agreement == "Low"    ~ pe("orange")), 
              bold = TRUE) %>% 
  column_spec(column = 3, 
              color = case_when(s_df$Evidence == "High" ~ pe("blue"),
                                s_df$Evidence == "Medium" ~ pe("green"),
                                s_df$Evidence == "Low" ~ pe("orange")), 
              bold = TRUE) %>% 
  column_spec(column = 4, 
              color = case_when(s_df$Confidence == "High" ~ pe("blue"),
                                s_df$Confidence == "Medium" ~ pe("green"),
                                s_df$Confidence == "Low" ~ pe("orange")), 
              bold = TRUE) 

fcts_demand_tbl <- 
  d_df %>% 
  kbl() %>%
  kable_styling(bootstrap_options = c("striped", "hover")) %>% 
  row_spec(row = 0, bold = TRUE) %>% 
  column_spec(column = 2, 
              color = case_when(d_df$Agreement == "High"   ~ pe("blue"),
                                d_df$Agreement == "Medium" ~ pe("green"),
                                d_df$Agreement == "Low"    ~ pe("orange")), 
              bold = TRUE) %>% 
  column_spec(column = 3, 
              color = case_when(d_df$Evidence == "High" ~ pe("blue"),
                                d_df$Evidence == "Medium" ~ pe("green"),
                                d_df$Evidence == "Low" ~ pe("orange")), 
              bold = TRUE) %>% 
  column_spec(column = 4, 
              color = case_when(d_df$Confidence == "High" ~ pe("blue"),
                                d_df$Confidence == "Medium" ~ pe("green"),
                                d_df$Confidence == "Low" ~ pe("orange")), 
              bold = TRUE) 

fcts_supply_tbl %>% saveRDS("fcts_supply_tbl.rds")
fcts_demand_tbl %>% saveRDS("fcts_demand_tbl.rds")
