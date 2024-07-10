from sqlmodel import Session
from models import User, UserBase
from security import get_password_hash

def get_users(db: Session):
    return db.query(User).all()

def get_user_by_id(db: Session, id:int):
    return db.get(User,id)

def get_user_by_username(db: Session, name: str):
    return db.query(User).filter(User.username == name).first()

def create_user(db: Session, user: User):
    new_password = get_password_hash(user.password)
    new_user = User(username= user.username, password= new_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def delete_user(db: Session, id: int):
    user = get_user_by_id(db, id)
    if user:
        db.delete(user)
        db.commit()
        return user
    return None
    