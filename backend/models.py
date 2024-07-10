from typing import Optional, Annotated
from sqlmodel import SQLModel, Field


class UserBase(SQLModel):
    username: str = Field(default=None, unique=True, index=True)


class User(UserBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    password: Optional[str] = Field(default=None)
