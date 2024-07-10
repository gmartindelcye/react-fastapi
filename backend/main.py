from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session
import crud
from database import get_session
from models import User

app = FastAPI()

origins = [
    'http://localhost:5173'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/')
def root():
    return { "message": " Server is up!"}


@app.get('/api/v1/users', response_model=list[User])
def get_users(db: Session = Depends(get_session)):
    return crud.get_users(db=db)

@app.post('/api/v1/users', response_model=User)
def create_user(user:User, db: Session = Depends(get_session)):
    check_username = crud.get_user_by_username(db=db, name=user.username)
    if check_username:
        raise HTTPException(status_code=400, detail='User already exists.')
    return crud.create_user(db=db, user=user)

@app.get('/api/v1/users/{id:int}', response_model=User)
def get_user(id: int, db: Session = Depends(get_session)):
    user = crud.get_user_by_id(db=db,id=id)
    print(f'user:{user}')
    if user:
        return user
    raise HTTPException(status_code=404, detail='User not found.')

@app.delete('/api/v1/users/{id:int}', response_model=User)
def delete_user(id: int, db: Session = Depends(get_session)):
    user = crud.get_user_by_id(db=db, id=id)
    if user:
        db.delete(user)
        db.commit()
        return user
    raise HTTPException(status_code=404, detail='User not found.')

